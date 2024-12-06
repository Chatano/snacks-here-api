import express from "express";
import dotenv from "dotenv";
import { server } from './server'

dotenv.config();

server.use(express.json())