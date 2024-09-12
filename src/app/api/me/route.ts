import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "สรวิศ หยกเทียมแท้",
    studentId: "660610800",
  });
};
