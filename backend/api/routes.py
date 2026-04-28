from fastapi import APIRouter
from pydantic import BaseModel
from engine.pipeline_orchestrator import pipeline_orchestrator
from engine.bottleneck_detector import bottleneck_detector
from engine.decision_engine import decision_engine
from engine.explanation_engine import explanation_engine
from engine.forecast_engine import forecast_engine
from engine.metrics_engine import metrics_engine
from engine.replanning_engine import replanning_engine
from engine.rule_engine import rule_engine

router = APIRouter()

class ShipmentRequest(BaseModel):
    origin: str
    destination: str
    weight: float = 0.0
    hazardous: bool = False

@router.post("/shipments")
async def create_shipment(req: ShipmentRequest):
    # Triggers route generator and pipeline orchestrator
    result = await pipeline_orchestrator.process_shipment_request(req.origin, req.destination)
    return {"status": "success", "data": result}

@router.get("/feasibility")
async def check_feasibility(origin: str, destination: str):
    # Dummy current conditions
    current_conditions = {"traffic_level": "High"}
    route_data = {"mode": "Road", "distance": 450}
    bottlenecks = bottleneck_detector.identify_bottlenecks(route_data, current_conditions)
    return {"bottlenecks": bottlenecks, "feasible": len(bottlenecks) == 0}

@router.get("/recommendations")
async def get_recommendations(origin: str, destination: str):
    result = await pipeline_orchestrator.process_shipment_request(origin, destination)
    explanation = explanation_engine.explain_decision(result)
    return {"recommendation": result, "explanation": explanation["explanation"]}

@router.get("/forecast")
async def get_forecast():
    forecast = forecast_engine.predict_future_demand([])
    return forecast

@router.post("/simulation")
async def run_simulation(severity: str = "High"):
    incident = {"severity": severity, "description": "Severe weather event"}
    replanning_result = replanning_engine.trigger_replanning({}, incident)
    metrics = metrics_engine.calculate_cost_loss(1000, 1500)
    return {"replanning": replanning_result, "impact": metrics}

@router.post("/constraints")
async def check_constraints(req: ShipmentRequest):
    result = rule_engine.check_constraints({"weight": req.weight, "hazardous": req.hazardous})
    return result

@router.get("/monitoring")
async def get_monitoring_data():
    return {"status": "Operational", "active_shipments": 15, "alerts": 0}

@router.get("/history")
async def get_history():
    return {"history": [{"id": 1, "origin": "NY", "destination": "LA", "status": "Delivered"}]}
