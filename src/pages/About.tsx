import { Heart, Truck, ShieldCheck, Users } from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Made with Care",
        description: "Every product is hand-picked by our team, not dropshipped in bulk."
    },
    {
        icon: Truck,
        title: "Fast Shipping",
        description: "Orders ship within 24 hours, straight to your door."
    },
    {
        icon: ShieldCheck,
        title: "Quality Guaranteed",
        description: "Not happy with your order? Full refund, no questions asked."
    },
    {
        icon: Users,
        title: "Community First",
        description: "Built by shoppers, for shoppers. Your feedback shapes what we sell."
    },
];

export default function About(){
    return(
        <div className="bg-white">

            {/* Hero */}
            <div className="bg-gradient-to-b from-purple-50 to-white">
                <div className="max-w-5xl mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        About <span className="text-purple-500">Us</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        We started this store with a simple idea: shopping online 
                        shouldn't feel overwhelming. Just good products, fair prices, 
                        and people who actually care.
                    </p>
                </div>
            </div>

            {/* Values grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map(({ icon: Icon, title, description }) => (
                        <div 
                            key={title}
                            className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                        >
                            <div className="bg-purple-100 text-purple-500 p-3 rounded-full mb-4">
                                <Icon size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                            <p className="text-sm text-gray-500">{description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Story section */}
            <div className="bg-purple-50 py-16">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Our Story
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        What began as a small side project has grown into a store 
                        trusted by thousands. We're still a small team, and we still 
                        read every piece of feedback — because at the end of the day, 
                        this store exists for you.
                    </p>
                </div>
            </div>

        </div>
    )
}