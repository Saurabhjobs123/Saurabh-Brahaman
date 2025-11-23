import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, TrendingUp, Heart } from "lucide-react";

export default function DonatePage() {
    return (
        <DashboardShell>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold mb-4">Support the Community</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Your voluntary contributions help us maintain the platform, organize events, and support members in need.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card className="border-amber-200 bg-amber-50/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                                Make a Contribution
                            </CardTitle>
                            <CardDescription>Secure payment gateway</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-3 gap-2">
                                <Button variant="outline">₹500</Button>
                                <Button variant="outline">₹1000</Button>
                                <Button variant="outline">₹5000</Button>
                            </div>
                            <div className="space-y-2">
                                <Label>Custom Amount</Label>
                                <Input placeholder="Enter amount in ₹" type="number" />
                            </div>
                            <Button className="w-full variant-premium">Donate Now</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-green-600" />
                                Transparency Promise
                            </CardTitle>
                            <CardDescription>We believe in 100% financial transparency.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm text-muted-foreground">
                            <p>
                                Every rupee collected is accounted for. Members can view quarterly audited reports of all expenses and donations.
                            </p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Platform Maintenance: 20%</li>
                                <li>Community Events: 40%</li>
                                <li>Charity & Support: 30%</li>
                                <li>Reserves: 10%</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold font-serif">Financial Reports</h2>
                    <div className="grid gap-4">
                        {[1, 2, 3].map((i) => (
                            <Card key={i}>
                                <CardContent className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
                                            <TrendingUp className="h-5 w-5 text-slate-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Q{i} 2025 Financial Statement</h3>
                                            <p className="text-xs text-muted-foreground">Audited by CA. V. Kulkarni</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">Download PDF</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardShell>
    );
}
