class RuleEngine:
    def check_constraints(self, shipment_details: dict):
        # Base logic: Apply business constraints on shipment
        alerts = []
        if shipment_details.get("weight", 0) > 10000:
            alerts.append("Overweight shipment, requires special permit.")
            
        if shipment_details.get("hazardous", False):
            alerts.append("Hazardous material, cannot use standard air freight.")
            
        return {
            "valid": len(alerts) == 0,
            "alerts": alerts
        }

rule_engine = RuleEngine()
