import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$19",
    period: "/month",
    icon: Zap,
    features: ["4 washes per month", "Exterior only", "Standard soap", "1 vehicle"],
    gradient: "gradient-card",
    popular: false,
    border: "border-border",
    iconColor: "text-primary",
  },
  {
    name: "Gold",
    price: "$39",
    period: "/month",
    icon: Star,
    features: ["20 washes per month", "Interior + Exterior", "Premium products", "2 vehicles", "Priority queue"],
    gradient: "gradient-primary",
    popular: true,
    border: "border-primary",
    iconColor: "text-primary-foreground",
  },
  {
    name: "Platinum",
    price: "$69",
    period: "/month",
    icon: Crown,
    features: ["Unlimited washes", "Full detail service", "Ceramic coating", "4 vehicles", "VIP lounge access", "Free tire shine"],
    gradient: "gradient-card",
    popular: false,
    border: "border-border",
    iconColor: "text-gold",
  },
];

const PlansScreen = () => {
  return (
    <div className="min-h-screen pb-28 pt-14 px-5">
      <h1 className="font-heading text-2xl font-bold mb-1">Choose Your Plan</h1>
      <p className="text-muted-foreground text-sm mb-6">
        Select the perfect wash plan for your needs
      </p>

      <div className="space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${plan.gradient} rounded-2xl p-5 border ${plan.border} relative overflow-hidden`}
          >
            {plan.popular && (
              <div className="absolute top-3 right-3 bg-primary-foreground/20 text-primary-foreground text-[10px] font-bold font-heading px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl ${plan.popular ? "bg-primary-foreground/20" : "bg-secondary"} flex items-center justify-center`}>
                <plan.icon size={20} className={plan.iconColor} />
              </div>
              <div>
                <h3 className={`font-heading text-lg font-bold ${plan.popular ? "text-primary-foreground" : ""}`}>
                  {plan.name}
                </h3>
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className={`font-heading text-3xl font-bold ${plan.popular ? "text-primary-foreground" : ""}`}>
                {plan.price}
              </span>
              <span className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.period}
              </span>
            </div>
            <ul className="space-y-2 mb-5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check
                    size={14}
                    className={plan.popular ? "text-primary-foreground" : "text-primary"}
                  />
                  <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-heading font-semibold text-sm transition-all ${
                plan.popular
                  ? "bg-primary-foreground text-primary hover:opacity-90"
                  : "gradient-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              {plan.popular ? "Current Plan" : "Subscribe"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansScreen;
