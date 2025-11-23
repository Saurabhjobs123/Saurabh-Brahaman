"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: "India",
        referralCode: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePayment = async () => {
        setLoading(true);
        // Simulate API call and Payment Gateway
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
        setStep(3); // Success step
    };

    // Mock fee calculation based on country (Admin configurable logic would go here)
    const registrationFee = formData.country === "India" ? 50 : 10; // 50 INR or 10 USD/EUR etc.
    const currency = formData.country === "India" ? "₹" : "$";

    return (
        <div className="min-h-screen bg-amber-50/30 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-serif font-bold text-xl">B</span>
                        </div>
                        <span className="font-serif text-xl font-bold tracking-tight">Brahman Connect</span>
                    </Link>
                    <h1 className="text-2xl font-bold">Join the Community</h1>
                    <p className="text-muted-foreground">Step {step} of 3</p>
                </div>

                <Card className="border-amber-200/50 shadow-lg">
                    {step === 1 && (
                        <>
                            <CardHeader>
                                <CardTitle>Personal Details</CardTitle>
                                <CardDescription>Create your profile to get started.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First name</Label>
                                        <Input id="firstName" name="firstName" placeholder="Rahul" value={formData.firstName} onChange={handleInputChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input id="lastName" name="lastName" placeholder="Sharma" value={formData.lastName} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="rahul@example.com" value={formData.email} onChange={handleInputChange} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="country">Country</Label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                    >
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="referralCode">Referral Code (Optional)</Label>
                                    <Input id="referralCode" name="referralCode" placeholder="Enter code for benefits" value={formData.referralCode} onChange={handleInputChange} />
                                    <p className="text-xs text-muted-foreground">Using a valid code supports the community.</p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" onClick={handleNext}>
                                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <CardHeader>
                                <CardTitle>Membership Fee</CardTitle>
                                <CardDescription>Complete your registration to access the platform.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">Registration Fee</span>
                                        <span className="font-bold text-lg">{currency}{registrationFee}</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Includes lifetime access to networking, family tree tools, and community events.
                                    </div>
                                </div>

                                {formData.referralCode && (
                                    <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-sm text-green-700 flex items-center">
                                        <CheckCircle2 className="h-4 w-4 mr-2" />
                                        Referral code applied! Refund eligible.
                                    </div>
                                )}

                                <div className="text-xs text-center text-muted-foreground mt-4">
                                    By clicking Pay, you agree to our Terms and Conditions.
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                                <Button className="w-full variant-premium" onClick={handlePayment} disabled={loading}>
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : `Pay ${currency}${registrationFee} & Join`}
                                </Button>
                            </CardFooter>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <CardHeader className="text-center">
                                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Welcome, {formData.firstName}!</CardTitle>
                                <CardDescription>Your account has been successfully created.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-slate-50 p-4 rounded-lg border text-center">
                                    <p className="text-sm text-muted-foreground mb-1">Your Referral Code</p>
                                    <p className="text-xl font-mono font-bold tracking-wider select-all">
                                        {formData.firstName.toUpperCase().substring(0, 3)}2025
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        Share this code to earn rewards!
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link href="/dashboard" className="w-full">
                                    <Button className="w-full">Go to Dashboard</Button>
                                </Link>
                            </CardFooter>
                        </>
                    )}
                </Card>
            </div>
        </div>
    );
}
