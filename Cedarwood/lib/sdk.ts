// @ts-nocheck
/* eslint-disable */

// Site ID for Cedarwood School
const SITE_ID = "547c1b22-0ee6-40f7-968d-cbfecdfe2191"

let staffInstance: any;

// Helper to create a safe proxy for SSR/Server
const createProxy = () => {
    return new Proxy({}, {
        get: (target, prop) => {
            // Return a function that does nothing or returns null/promise
            // to prevent crashes if called on server
            return () => Promise.resolve({ status: "error", message: "SDK not available on server" });
        }
    });
};

if (typeof window !== "undefined") {
    // Only import and initialize on client side
    try {
        // Use require to synchronously load if possible, or we rely on bundler handling this block
        const { Staff } = require("educa-sdk");
        const { classroom } = require("educa-sdk/src/staff/classroom");
        const { exam } = require("educa-sdk/src/staff/exam");
        // Using admin student module as it appears missing in staff
        const { student } = require("educa-sdk/src/admin/student");

        staffInstance = new Staff(SITE_ID);

        // Patch missing modules
        staffInstance.classroom = classroom(SITE_ID);
        staffInstance.exam = exam(SITE_ID);
        // Patch student from admin source (assuming compat)
        staffInstance.student = student(SITE_ID);

    } catch (e) {
        console.error("Failed to initialize SDK:", e);
        staffInstance = createProxy();
    }
} else {
    // Server side - return proxy
    staffInstance = createProxy();
    // We also need to mock the deep structure if accessed directly like staff.student.studentList
    // But the Proxy above handles 'get' by returning a function.
    // However, if code does staff.student.studentList(), 
    // staff.student gets the proxy function, but we can't call .studentList on a function easily unless the proxy is recursive.
    // Let's make a recursive proxy for safety.
    const recursiveProxy = new Proxy(() => { }, {
        get: (target, prop) => recursiveProxy,
        apply: () => Promise.resolve({ status: "error", message: "SSR" })
    });
    staffInstance = recursiveProxy;
}

export const staff = staffInstance;
