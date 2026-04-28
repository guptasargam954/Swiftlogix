from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from backend.db.session import get_db
from backend.db.models import Shipment
from backend.engine.pipeline_orchestrator import pipeline_orchestrator
from backend.engine.bottleneck_detector import bottleneck_detector
from backend.engine.decision_engine import decision_engine
from backend.engine.explanation_engine import explanation_engine
from backend.engine.forecast_engine import forecast_engine
from backend.engine.metrics_engine import metrics_engine
from backend.engine.replanning_engine import replanning_engine
from backend.engine.rule_engine import rule_engine

router = APIRouter()

class ShipmentRequest(BaseModel):
    origin: str
    destination: str
    weight: float = 0.0
    hazardous: bool = False

@router.post("/shipments")
async def create_shipment(req: ShipmentRequest, db: AsyncSession = Depends(get_db)):
    # Triggers route generator and pipeline orchestrator
    result = await pipeline_orchestrator.process_shipment_request(req.origin, req.destination)
    
    # Save to DB
    new_shipment = Shipment(
        origin=req.origin,
        destination=req.destination,
        weight=req.weight,
        hazardous=req.hazardous,
        best_mode=result["best_route"]["mode"] if result.get("best_route") else None,
        estimated_cost=result["best_route"]["cost"] if result.get("best_route") else None
    )
    db.add(new_shipment)
    await db.commit()
    
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

@router.get("/shipments")
async def get_shipments(db: AsyncSession = Depends(get_db)):
    from sqlalchemy import select
    result = await db.execute(select(Shipment).order_by(Shipment.id.desc()).limit(10))
    shipments = result.scalars().all()
    return {"status": "success", "data": shipments}
