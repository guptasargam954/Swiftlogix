class ReplanningEngine:
    def trigger_replanning(self, current_route: dict, incident_report: dict):
        # Triggered when simulation or monitoring detects a disruption
        if incident_report.get("severity") == "High":
            return {
                "status": "Replanning Triggered",
                "new_action_required": True,
                "reason": incident_report.get("description")
            }
        return {"status": "Route OK", "new_action_required": False}

replanning_engine = ReplanningEngine()
