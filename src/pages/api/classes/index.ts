// pages/api/classes/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const classes = await prisma.class.findMany({ include: { building: true } });
    res.json(classes);
  } else if (req.method === 'POST') {
    const { name, capacity, buildingId } = req.body;
    const classData = await prisma.class.create({
      data: { name, capacity: parseInt(capacity), buildingId },
    });
    res.json(classData);
  }
}