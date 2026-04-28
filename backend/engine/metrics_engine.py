class MetricsEngine:
    def calculate_cost_loss(self, planned_cost: float, actual_cost: float):
        # Calculate deviation and loss
        loss = actual_cost - planned_cost
        return {
            "planned_cost": planned_cost,
            "actual_cost": actual_cost,
            "loss": loss if loss > 0 else 0,
            "savings": abs(loss) if loss < 0 else 0
        }

metrics_engine = MetricsEngine()
