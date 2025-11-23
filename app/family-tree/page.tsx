import { DashboardShell } from "@/components/DashboardShell";
import { FamilyNode, FamilyMember } from "@/components/FamilyNode";
import { Button } from "@/components/ui/button";
import { Share2, Lock } from "lucide-react";

const initialTree: FamilyMember = {
    id: "1",
    name: "Grandfather Sharma",
    relation: "Head",
    spouse: { id: "1s", name: "Grandmother Sharma", relation: "Spouse" },
    children: [
        {
            id: "2",
            name: "Father Sharma",
            relation: "Son",
            spouse: { id: "2s", name: "Mother Sharma", relation: "Spouse" },
            children: [
                { id: "3", name: "Rahul Sharma", relation: "Self" },
                { id: "4", name: "Priya Sharma", relation: "Sister" },
            ]
        },
        {
            id: "5",
            name: "Uncle Sharma",
            relation: "Son",
            spouse: { id: "5s", name: "Aunt Sharma", relation: "Spouse" },
            children: [
                { id: "6", name: "Cousin Amit", relation: "Cousin" }
            ]
        }
    ]
};

export default function FamilyTreePage() {
    return (
        <DashboardShell>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold font-serif">My Family Tree</h2>
                    <p className="text-muted-foreground">Visualize and manage your heritage.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Lock className="mr-2 h-4 w-4" />
                        Privacy Settings
                    </Button>
                    <Button variant="premium">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share Tree
                    </Button>
                </div>
            </div>

            <div className="bg-amber-50/30 border rounded-xl p-8 min-h-[600px] overflow-auto flex justify-center">
                <div className="min-w-max">
                    <FamilyNode member={initialTree} />
                </div>
            </div>
        </DashboardShell>
    );
}
