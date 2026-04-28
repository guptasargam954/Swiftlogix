class MapService:
    def __init__(self, api_key: str):
        self.api_key = api_key

    async def get_distance_and_time(self, origin: str, destination: str):
        # Mock route data
        return {
            "origin": origin,
            "destination": destination,
            "distance_km": 450,
            "estimated_time_hours": 6.5,
            "route_polyline": "mock_polyline_data"
        }

map_service = MapService(api_key="mock_key")
