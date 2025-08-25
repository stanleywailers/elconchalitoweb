// analyticsHelper.ts
import { logEvent as firebaseLogEvent } from "firebase/analytics";

import { analytics } from "@/firebaseConfig";

export function logEventSafe(eventName: string, params?: Record<string, any>) {
  if (analytics) {
    firebaseLogEvent(analytics, eventName, params);
  } else {
    console.warn("Analytics no está inicializado, evento ignorado:", eventName);
  }
}
