class ExplanationEngine:
    def explain_decision(self, decision_result: dict):
        # Generates human-readable explanation for why a route was chosen
        route = decision_result.get("best_route", {})
        explanation = f"Selected {route.get('mode')} route due to optimal balance of cost (${route.get('cost')}) and duration ({route.get('duration')} hrs)."
        return {
            "explanation": explanation
        }

explanation_engine = ExplanationEngine()
