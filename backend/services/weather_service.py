class WeatherService:
    def __init__(self, api_key: str):
        self.api_key = api_key

    async def get_weather(self, location: str):
        # Mock weather data
        return {
            "location": location,
            "condition": "Clear",
            "temperature_celsius": 22,
            "wind_speed_kmh": 15,
            "visibility_km": 10
        }

weather_service = WeatherService(api_key="mock_key")
