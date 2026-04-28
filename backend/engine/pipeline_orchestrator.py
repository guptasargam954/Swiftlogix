from engine.route_generator import route_generator
from engine.decision_engine import decision_engine

class PipelineOrchestrator:
    async def process_shipment_request(self, origin: str, destination: str):
        # 1. Generate Routes
        routes = await route_generator.generate_routes(origin, destination)
        
        # 2. Rank Routes with Decision Engine
        ranked_routes = await decision_engine.rank_routes(routes, origin)
        
        # Return best recommended route
        return {
            "origin": origin,
            "destination": destination,
            "best_route": ranked_routes[0] if ranked_routes else None,
            "alternatives": ranked_routes[1:]
        }

pipeline_orchestrator = PipelineOrchestrator()
