"use client";

import { atom } from "jotai";

export const userAtom = atom<string>("Username");

export const avatarAtom = atom<string>("url");

export const shareAtom = atom<string>("synapsphere.app/123ABC");
