import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, MapPin, Video, Users } from "lucide-react";

const events = [
    {
        id: 1,
        title: "Global Brahman Summit 2025",
        date: "Dec 15, 2025",
        time: "10:00 AM EST",
        location: "Online (Zoom)",
        type: "Virtual",
        attendees: 1200,
        image: "bg-amber-100"
    },
    {
        id: 2,
        title: "Vedic Chanting Workshop",
        date: "Dec 20, 2025",
        time: "09:00 AM IST",
        location: "Dadar, Mumbai",
        type: "In-Person",
        attendees: 45,
        image: "bg-orange-100"
    },
    {
        id: 3,
        title: "Youth Career Guidance",
        date: "Jan 05, 2026",
        time: "06:00 PM IST",
        location: "Bangalore",
        type: "In-Person",
        attendees: 80,
        image: "bg-blue-100"
    }
];

export default function EventsPage() {
    return (
        <DashboardShell>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold font-serif">Community Events</h2>
                    <p className="text-muted-foreground">Join online and offline gatherings.</p>
                </div>
                <Button variant="premium">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Host an Event
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                        <div className={`h-40 ${event.image} flex items-center justify-center`}>
                            <CalendarIcon className="h-12 w-12 text-primary/40" />
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-lg">{event.title}</CardTitle>
                                <span className={`text-xs px-2 py-1 rounded-full ${event.type === 'Virtual' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                                    {event.type}
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                                <CalendarIcon className="h-4 w-4 mr-2" />
                                {event.date} • {event.time}
                            </div>
                            <div className="flex items-center">
                                {event.type === 'Virtual' ? <Video className="h-4 w-4 mr-2" /> : <MapPin className="h-4 w-4 mr-2" />}
                                {event.location}
                            </div>
                            <div className="flex items-center">
                                <Users className="h-4 w-4 mr-2" />
                                {event.attendees} Attending
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">RSVP Now</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </DashboardShell>
    );
}
