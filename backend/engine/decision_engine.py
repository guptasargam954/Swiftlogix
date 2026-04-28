from backend.services.weather_service import weather_service

class DecisionEngine:
    async def rank_routes(self, routes: list, origin: str):
        # Base logic: get weather at origin, adjust scores
        weather_info = await weather_service.get_weather(origin)
        
        for route in routes:
            # Weighted scoring (Lower is better for cost/time, but we'll normalize to 0-100 where higher is better)
            # Normalization factor (simplified)
            cost_factor = 40 / (route["cost"] / 1000 + 1)
            time_factor = 40 / (route["duration"] / 10 + 1)
            emission_factor = 20 / (route["emissions"] / 100 + 1)
            
            base_score = cost_factor + time_factor + emission_factor
            
            # Adjust score based on weather constraint
            if weather_info["condition"] != "Clear":
                if route["mode"] == "Air":
                    base_score *= 0.8 # 20% penalty for air in bad weather
                elif route["mode"] == "Road":
                    base_score *= 0.9 # 10% penalty for road
                
            # Risk and Reliability logic
            if route["mode"] == "Air":
                risk_score = 2 if weather_info["condition"] == "Clear" else 5
                reliability = 98 if weather_info["condition"] == "Clear" else 85
            elif route["mode"] == "Road":
                risk_score = 4 if weather_info["condition"] == "Clear" else 7
                reliability = 85 if weather_info["condition"] == "Clear" else 70
            else: # Rail/Water
                risk_score = 1
                reliability = 92
                
            route["risk_score"] = risk_score
            route["reliability"] = reliability
            route["score"] = round(base_score, 1)
            
        # Sort by score descending
        routes.sort(key=lambda x: x["score"], reverse=True)
        return routes

decision_engine = DecisionEngine()
