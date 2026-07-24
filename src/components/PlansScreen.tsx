import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$19",
    period: "/mo",
    icon: Zap,
    features: ["4 washes/mo", "Exterior only", "1 vehicle"],
    gradient: "gradient-card",
    popular: false,
    border: "border-border",
    iconColor: "text-primary",
  },
  {
    name: "Gold",
    price: "$39",
    period: "/mo",
    icon: Star,
    features: ["20 washes/mo", "Interior + Ext.", "2 vehicles", "Priority queue"],
    gradient: "gradient-primary",
    popular: true,
    border: "border-primary",
    iconColor: "text-primary-foreground",
  },
  {
    name: "Platinum",
    price: "$69",
    period: "/mo",
    icon: Crown,
    features: ["Unlimited", "Full detail", "4 vehicles", "VIP lounge"],
    gradient: "gradient-card",
    popular: false,
    border: "border-border",
    iconColor: "text-gold",
  },
];

const PlansScreen = () => {
  return (
    <div className="min-h-screen pb-28 pt-14 px-4 flex flex-col">
      <h1 className="font-heading text-2xl font-bold mb-1">Choose Your Plan</h1>
      <p className="text-muted-foreground text-sm mb-5">
        All plans, side by side
      </p>

      <div className="grid grid-cols-3 gap-2.5 flex-1">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${plan.gradient} rounded-2xl p-3 border ${plan.border} relative overflow-hidden flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute top-2 right-2 bg-primary-foreground/20 text-primary-foreground text-[8px] font-bold font-heading px-2 py-0.5 rounded-full uppercase tracking-wider">
                Best
              </div>
            )}
            <div className={`w-8 h-8 rounded-lg ${plan.popular ? "bg-primary-foreground/20" : "bg-secondary"} flex items-center justify-center mb-2`}>
              <plan.icon size={16} className={plan.iconColor} />
            </div>
            <h3 className={`font-heading text-sm font-bold mb-1 ${plan.popular ? "text-primary-foreground" : ""}`}>
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-0.5 mb-3">
              <span className={`font-heading text-xl font-bold ${plan.popular ? "text-primary-foreground" : ""}`}>
                {plan.price}
              </span>
              <span className={`text-[10px] ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.period}
              </span>
            </div>
            <ul className="space-y-1.5 mb-3 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-1">
                  <Check
                    size={11}
                    className={`mt-0.5 shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`}
                  />
                  <span className={`text-[10px] leading-tight ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg font-heading font-semibold text-[10px] transition-all ${
                plan.popular
                  ? "bg-primary-foreground text-primary hover:opacity-90"
                  : "gradient-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              {plan.popular ? "Current" : "Select"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansScreen;
