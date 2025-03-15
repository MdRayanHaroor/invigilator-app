// pages/api/buildings/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const buildings = await prisma.building.findMany();
    res.json(buildings);
  } else if (req.method === 'POST') {
    const { name } = req.body;
    const building = await prisma.building.create({ data: { name } });
    res.json(building);
  }
}