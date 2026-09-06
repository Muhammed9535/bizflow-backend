import { z } from "zod";

import { createBusinessUser } from "../validators/validators.js";

export type CreateBusinessUserInput = z.infer<typeof createBusinessUser>;
