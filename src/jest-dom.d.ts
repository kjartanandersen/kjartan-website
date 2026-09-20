// Makes the @testing-library/jest-dom matcher types (toBeInTheDocument,
// toHaveAttribute, …) available to the TypeScript compiler and the editor.
// The runtime side is registered in setup.jest.ts, which lives at the repo
// root and is outside tsconfig's "src" include, so the augmentation is
// referenced here instead.
import "@testing-library/jest-dom";
