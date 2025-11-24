import {prisma} from "./prisma";

// CREATE
export async function Add(name: string) {
  try {
    const newObj = await prisma.tempObject.create({
      data: {
        name,
      },
    });
    console.log("Created:", newObj);
    return newObj;
  } catch (error) {
    console.error("Error creating:", error);
  }
}

// READ ALL
export async function GetAll() {
  try {
    const data = await prisma.tempObject.findMany();
    console.log("All records:", data);
    return data;
  } catch (error) {
    console.error("Error reading:", error);
  }
}

// READ SINGLE BY ID
export async function GetById(id: string) {
  try {
    const data = await prisma.tempObject.findUnique({
      where: { id },
    });
    console.log("Found:", data);
    return data;
  } catch (error) {
    console.error("Error reading by ID:", error);
  }
}

// DELETE BY ID
export async function DeleteById(id: string) {
  try {
    const deleted = await prisma.tempObject.delete({
      where: { id },
    });
    console.log("Deleted:", deleted);
    return deleted;
  } catch (error) {
    console.error("Error deleting:", error);
  }
}

