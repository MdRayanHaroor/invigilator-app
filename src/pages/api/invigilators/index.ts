// pages/api/invigilators/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const invigilators = await prisma.invigilator.findMany({
      include: { exam: { include: { class: true } }, teacher: true },
    });
    res.json(invigilators);
  } else if (req.method === 'POST') {
    const { examId, teacherId } = req.body;
    const invigilator = await prisma.invigilator.create({
      data: { examId, teacherId },
    });
    res.json(invigilator);
  }
}