util functions should be pure in the sense that they should not have unintended effects.

If function is pure it's good to keep it in utils.
If it modifies store it's not advised to keep it in utils.
