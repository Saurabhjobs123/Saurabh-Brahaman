import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Star, Briefcase, GraduationCap, Scroll } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Vedic Mathematics Tutor",
        provider: "Dr. A. Sharma",
        category: "Education",
        location: "Mumbai, MH",
        rating: 4.9,
        price: "₹500/hr",
        image: "bg-blue-100"
    },
    {
        id: 2,
        title: "Griha Pravesh Puja",
        provider: "Pt. R. Mishra",
        category: "Priest Services",
        location: "Delhi, DL",
        rating: 5.0,
        price: "₹2100",
        image: "bg-orange-100"
    },
    {
        id: 3,
        title: "Career Counseling",
        provider: "S. Iyer",
        category: "Coaching",
        location: "Bangalore, KA",
        rating: 4.8,
        price: "₹1000/session",
        image: "bg-green-100"
    },
    {
        id: 4,
        title: "Sanskrit Classes",
        provider: "V. Joshi",
        category: "Education",
        location: "Online",
        rating: 4.7,
        price: "₹300/class",
        image: "bg-yellow-100"
    }
];

export default function ServicesPage() {
    return (
        <DashboardShell>
            <div className="mb-8">
                <h2 className="text-2xl font-bold font-serif mb-4">Community Services</h2>
                <div className="flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search for services (e.g. Puja, Math, Coding)..." className="pl-10" />
                    </div>
                    <Button variant="outline">
                        <MapPin className="mr-2 h-4 w-4" />
                        Location
                    </Button>
                    <Button variant="premium">Post a Service</Button>
                </div>
            </div>

            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                {["All", "Education", "Priest Services", "Coaching", "Jobs", "Matrimony"].map((cat) => (
                    <Button key={cat} variant="secondary" size="sm" className="whitespace-nowrap">
                        {cat}
                    </Button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <Card key={service.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className={`h-32 ${service.image} flex items-center justify-center`}>
                            {service.category === "Education" && <GraduationCap className="h-12 w-12 text-blue-500/50" />}
                            {service.category === "Priest Services" && <Scroll className="h-12 w-12 text-orange-500/50" />}
                            {service.category === "Coaching" && <Briefcase className="h-12 w-12 text-green-500/50" />}
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg">{service.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{service.provider}</p>
                                </div>
                                <div className="flex items-center bg-amber-50 px-2 py-1 rounded text-xs font-bold text-amber-700">
                                    <Star className="h-3 w-3 mr-1 fill-amber-700" />
                                    {service.rating}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <MapPin className="h-4 w-4 mr-1" />
                                {service.location}
                            </div>
                            <div className="font-semibold text-primary">
                                {service.price}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Book Now</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </DashboardShell>
    );
}
