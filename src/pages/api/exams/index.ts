// pages/api/exams/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const exams = await prisma.exam.findMany({ include: { class: true } });
    res.json(exams);
  } else if (req.method === 'POST') {
    const { classId, date } = req.body;
    const exam = await prisma.exam.create({ data: { classId, date: new Date(date) } });
    res.json(exam);
  }
}