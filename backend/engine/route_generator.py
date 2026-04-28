from backend.services.map_service import map_service

class RouteGenerator:
    async def generate_routes(self, origin: str, destination: str):
        # Base logic: call map service to get distance and time
        route_info = await map_service.get_distance_and_time(origin, destination)
        
        # Calculate variations based on the mock distance
        distance = route_info["distance_km"]
        
        return [
            {
                "mode": "Air",
                "distance": distance,
                "duration": round(distance / 800 + 2, 1),  # 800km/h + 2h handling
                "cost": round(distance * 5.5, 2),
                "emissions": round(distance * 0.5, 2)
            },
            {
                "mode": "Road",
                "distance": distance * 1.2,
                "duration": round((distance * 1.2) / 80 + 1, 1), # 80km/h + 1h stop
                "cost": round(distance * 1.2, 2),
                "emissions": round(distance * 0.15, 2)
            },
            {
                "mode": "Rail",
                "distance": distance * 1.15,
                "duration": round((distance * 1.15) / 100 + 4, 1), # 100km/h + 4h terminal
                "cost": round(distance * 0.8, 2),
                "emissions": round(distance * 0.05, 2)
            }
        ]

route_generator = RouteGenerator()
