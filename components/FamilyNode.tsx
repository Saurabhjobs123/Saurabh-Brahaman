import { Button } from "@/components/ui/button";
import { Plus, User } from "lucide-react";

export interface FamilyMember {
    id: string;
    name: string;
    relation: string;
    children?: FamilyMember[];
    spouse?: FamilyMember;
}

export function FamilyNode({ member }: { member: FamilyMember }) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
                {/* Main Member Card */}
                <div className="relative group">
                    <div className="w-40 h-48 bg-card border-2 border-amber-200 rounded-xl shadow-sm flex flex-col items-center justify-center p-4 hover:shadow-md transition-all hover:border-primary cursor-pointer">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3 text-amber-700">
                            <User className="h-8 w-8" />
                        </div>
                        <h3 className="font-semibold text-center text-sm">{member.name}</h3>
                        <p className="text-xs text-muted-foreground">{member.relation}</p>

                        {/* Add Action Overlay */}
                        <div className="absolute inset-0 bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full" title="Add Child">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Spouse Card (if exists) */}
                {member.spouse && (
                    <>
                        <div className="w-8 h-0.5 bg-amber-300"></div>
                        <div className="w-40 h-48 bg-card border-2 border-pink-100 rounded-xl shadow-sm flex flex-col items-center justify-center p-4">
                            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-3 text-pink-400">
                                <User className="h-8 w-8" />
                            </div>
                            <h3 className="font-semibold text-center text-sm">{member.spouse.name}</h3>
                            <p className="text-xs text-muted-foreground">Spouse</p>
                        </div>
                    </>
                )}
            </div>

            {/* Children Connector */}
            {member.children && member.children.length > 0 && (
                <div className="flex flex-col items-center w-full">
                    <div className="h-8 w-0.5 bg-amber-300"></div>
                    <div className="w-full h-0.5 bg-amber-300 mb-8 relative">
                        {/* Logic to hide connector lines for first/last child would go here for perfect tree */}
                    </div>
                    <div className="flex gap-8 justify-center w-full">
                        {member.children.map((child) => (
                            <FamilyNode key={child.id} member={child} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
