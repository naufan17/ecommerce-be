import { Response } from 'express';

export const handleOk = <T>(res: Response, message: string, data?: T) => {
  return res.status(200).json({
    status: true,
    message,
    data,
  });
};

export const handleCreated = (res: Response, message: string) => {
  return res.status(201).json({
    status: true,
    message,
  });
};

export const handleUpdated = (res: Response, message: string) => {
  return res.status(201).json({
    status: true,
    message,
  });
};

export const handleBadRequest = (res: Response, message: string) => {
  return res.status(400).json({
    status: false,
    message,
  });
};

export const handleUnauthorized = (res: Response, message: string) => {
  return res.status(401).json({
    status: false,
    message,
  });
};

export const handleNotFound = (res: Response, message: string) => {
  return res.status(404).json({
    status: false,
    message,
  });
};

export const handleConflict = (res: Response, message: string) => {
  return res.status(409).json({
    status: false,
    message,
  });
}

export const handleInternalServerError = (res: Response, message: string, error: unknown) => {
  return res.status(500).json({
    status: false,
    message,
    error,
  });
};