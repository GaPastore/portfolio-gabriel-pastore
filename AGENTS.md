# Custom Agent Instructions

- **No Automatic Command Execution**: Do NOT automatically execute `npm run build`, `npm deploy` (`npm run deploy`), or `npm run dev`. Only execute them when explicitly requested by the user.
- **No Prompting for Commands**: Do NOT ask at the end of prompt executions whether the user wants to run `npm run build`, `npm run dev`, or `npm run deploy`.
- **No Unrequested Code Modifications**: Do NOT make or execute code modifications unless explicitly requested by the user or as part of executing an approved implementation plan.

