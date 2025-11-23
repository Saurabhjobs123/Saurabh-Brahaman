import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, Filter } from "lucide-react";

const members = [
    { id: 1, name: "Amit Trivedi", location: "Andheri, Mumbai", distance: "2.5 km", profession: "Software Engineer" },
    { id: 2, name: "Sneha Iyer", location: "Juhu, Mumbai", distance: "4.1 km", profession: "Doctor" },
    { id: 3, name: "Rajesh Kulkarni", location: "Bandra, Mumbai", distance: "8.0 km", profession: "Architect" },
    { id: 4, name: "Priya Desai", location: "Thane", distance: "15.0 km", profession: "Teacher" },
];

export default function DirectoryPage() {
    return (
        <DashboardShell>
            <div className="flex flex-col h-[calc(100vh-10rem)]">
                <div className="mb-6 flex justify-between items-end">
                    <div>
                        <h2 className="text-2xl font-bold font-serif">Member Directory</h2>
                        <p className="text-muted-foreground">Find community members near you.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <Filter className="mr-2 h-4 w-4" />
                            Filters
                        </Button>
                        <Button variant="premium">
                            <MapPin className="mr-2 h-4 w-4" />
                            Map View
                        </Button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 h-full">
                    {/* List View */}
                    <div className="lg:col-span-1 overflow-auto pr-2 space-y-4">
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search by name or city..." className="pl-10" />
                        </div>

                        {members.map((member) => (
                            <Card key={member.id} className="hover:bg-accent/50 cursor-pointer transition-colors">
                                <CardContent className="p-4 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                        {member.name[0]}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm">{member.name}</h3>
                                        <p className="text-xs text-muted-foreground">{member.profession}</p>
                                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                                            <MapPin className="h-3 w-3 mr-1" />
                                            {member.location} • {member.distance}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Map Placeholder */}
                    <div className="lg:col-span-2 bg-slate-100 rounded-xl border flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/1024px-Google_Maps_Logo_2020.svg.png')] bg-center bg-cover grayscale"></div>
                        <div className="text-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-sm z-10">
                            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="font-semibold text-lg">Interactive Map</h3>
                            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                                Map integration requires a valid API key (Google Maps/Mapbox).
                                This is a placeholder for the location-based discovery feature.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}
