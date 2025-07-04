import { getConnection } from "@/lib/db";
import { User } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";
import type { ResultSetHeader } from 'mysql2';
import bcrypt from 'bcrypt';

export async function GET(){
    const conn= await getConnection();
    const [rows]=await conn.execute('SELECT * FROM users');
    await conn.end();
    const users= rows as User[];
    return NextResponse.json(users);
}
export async function POST(req: NextRequest) {
    const {
        name,
        email,
        password,
        github,
        graduation_year,
        college,
        experience,
        location
    } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const conn = await getConnection();
    const [result] = await conn.execute<ResultSetHeader>(
        `INSERT INTO users
        (name, email, password, github, graduation_year, college, experience, location)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, email, hashedPassword, github, graduation_year, college, experience, location]
    );

    await conn.end();

    return NextResponse.json({
        message: 'User created successfully',
        id: result.insertId,
    });
}
