import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    LayoutDashboard,
    TreeDeciduous,
    Users,
    Briefcase,
    Calendar,
    Settings,
    LogOut,
    MapPin
} from "lucide-react";

export function DashboardShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex bg-muted/20">
            {/* Sidebar */}
            <aside className="w-64 bg-card border-r hidden md:flex flex-col">
                <div className="p-6 border-b">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-serif font-bold text-xl">B</span>
                        </div>
                        <span className="font-serif text-xl font-bold tracking-tight">Brahman</span>
                    </div>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/dashboard">
                        <Button variant="ghost" className="w-full justify-start">
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Overview
                        </Button>
                    </Link>
                    <Link href="/family-tree">
                        <Button variant="ghost" className="w-full justify-start">
                            <TreeDeciduous className="mr-2 h-4 w-4" />
                            Family Tree
                        </Button>
                    </Link>
                    <Link href="/directory">
                        <Button variant="ghost" className="w-full justify-start">
                            <MapPin className="mr-2 h-4 w-4" />
                            Directory & Map
                        </Button>
                    </Link>
                    <Link href="/services">
                        <Button variant="ghost" className="w-full justify-start">
                            <Briefcase className="mr-2 h-4 w-4" />
                            Services
                        </Button>
                    </Link>
                    <Link href="/events">
                        <Button variant="ghost" className="w-full justify-start">
                            <Calendar className="mr-2 h-4 w-4" />
                            Events
                        </Button>
                    </Link>
                    <div className="pt-4 mt-4 border-t">
                        <Link href="/settings">
                            <Button variant="ghost" className="w-full justify-start">
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </Button>
                        </Link>
                    </div>
                </nav>
                <div className="p-4 border-t">
                    <Link href="/">
                        <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                            <LogOut className="mr-2 h-4 w-4" />
                            Sign Out
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="h-16 border-b bg-card flex items-center justify-between px-6">
                    <h1 className="font-semibold text-lg">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-muted-foreground">
                            Welcome, Rahul Sharma
                        </div>
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                            R
                        </div>
                    </div>
                </header>
                <div className="flex-1 p-6 overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
