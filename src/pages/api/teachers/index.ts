// pages/api/teachers/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const teachers = await prisma.teacher.findMany();
    res.json(teachers);
  } else if (req.method === 'POST') {
    const { name, email, department } = req.body;
    const teacher = await prisma.teacher.create({
      data: { name, email, department },
    });
    res.json(teacher);
  }
}