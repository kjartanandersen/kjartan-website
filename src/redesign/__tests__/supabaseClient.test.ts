/**
 * Regression guard for the outage where the whole site rendered blank.
 *
 * supabaseClient used to `throw` at module scope when the REACT_APP_SUPABASE_*
 * variables were missing. Blog.tsx imports it statically, so on a production
 * build without those variables the throw happened during module evaluation and
 * React never mounted — every route, not just /blog, was a blank page.
 */

const URL_VAR = "REACT_APP_SUPABASE_URL";
const KEY_VAR = "REACT_APP_SUPABASE_ANON_KEY";

describe("supabaseClient", () => {
  const originalUrl = process.env[URL_VAR];
  const originalKey = process.env[KEY_VAR];
  let warn: jest.SpyInstance;

  beforeEach(() => {
    jest.resetModules();
    warn = jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    warn.mockRestore();
    process.env[URL_VAR] = originalUrl;
    process.env[KEY_VAR] = originalKey;
  });

  it("does not throw when the Supabase variables are missing", async () => {
    delete process.env[URL_VAR];
    delete process.env[KEY_VAR];

    const client = await import("../pages/supabaseClient");

    expect(client.isSupabaseConfigured).toBe(false);
    expect(client.supabase).toBeNull();
    expect(warn).toHaveBeenCalled();
  });

  it("creates a client when both variables are present", async () => {
    process.env[URL_VAR] = "https://example.supabase.co";
    process.env[KEY_VAR] = "test-anon-key";

    const client = await import("../pages/supabaseClient");

    expect(client.isSupabaseConfigured).toBe(true);
    expect(client.supabase).not.toBeNull();
    expect(warn).not.toHaveBeenCalled();
  });
});
