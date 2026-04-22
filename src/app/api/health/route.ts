export const dynamic = "force-dynamic";

export async function GET() {
  // Return healthy response without database check
  return Response.json({ 
    ok: true, 
    message: "Service is running",
    database: "not_required"
  });
}