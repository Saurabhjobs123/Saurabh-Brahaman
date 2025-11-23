"use client";

import { DashboardShell } from "@/components/DashboardShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Save } from "lucide-react";

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        globalFee: 50,
        referralPercent: 20,
        adminRoyalty: 10,
    });

    const handleSave = () => {
        // Mock save
        alert("Settings saved successfully!");
    };

    return (
        <DashboardShell>
            <div className="mb-8">
                <h2 className="text-2xl font-bold font-serif">Admin Settings</h2>
                <p className="text-muted-foreground">Manage platform fees and commissions.</p>
            </div>

            <div className="grid gap-6 max-w-2xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Global Fee Configuration</CardTitle>
                        <CardDescription>Set the base registration fees and referral logic.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Registration Fee (INR)</Label>
                                <Input
                                    type="number"
                                    value={settings.globalFee}
                                    onChange={(e) => setSettings({ ...settings, globalFee: Number(e.target.value) })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Referral Refund (%)</Label>
                                <Input
                                    type="number"
                                    value={settings.referralPercent}
                                    onChange={(e) => setSettings({ ...settings, referralPercent: Number(e.target.value) })}
                                />
                                <p className="text-xs text-muted-foreground">
                                    User gets {settings.referralPercent}% of the new member's fee.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Admin Royalty (%)</Label>
                            <Input
                                type="number"
                                value={settings.adminRoyalty}
                                onChange={(e) => setSettings({ ...settings, adminRoyalty: Number(e.target.value) })}
                                disabled
                            />
                            <p className="text-xs text-muted-foreground">
                                Fixed 10% royalty on all transactions (Hardcoded).
                            </p>
                        </div>

                        <Button onClick={handleSave} className="w-full">
                            <Save className="mr-2 h-4 w-4" />
                            Save Changes
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Country-Specific Overrides</CardTitle>
                        <CardDescription>Set different fees for different regions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="border rounded-md">
                            <div className="grid grid-cols-3 p-3 bg-muted font-medium text-sm">
                                <div>Country</div>
                                <div>Fee</div>
                                <div>Referral %</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 border-t text-sm items-center">
                                <div>USA</div>
                                <div>$10.00</div>
                                <div>20%</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 border-t text-sm items-center">
                                <div>UK</div>
                                <div>£8.00</div>
                                <div>20%</div>
                            </div>
                            <div className="p-3 border-t">
                                <Button variant="outline" size="sm" className="w-full">+ Add Country Rule</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardShell>
    );
}
