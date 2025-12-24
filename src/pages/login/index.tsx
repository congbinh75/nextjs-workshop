import { ReactElement } from "react";
import Layout from "../layout";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const error = router.query.error;

  return (
    <section id="content-wrap" className="site-page">
      <div className="row">
        <div className="col-full">
          <form action={"/api/login"} method="post">
            <fieldset>
              <div className="form-field">
                <input
                  type="text"
                  id="email"
                  className="full-width"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="form-field">
                <input
                  type="password"
                  id="password"
                  className="full-width"
                  placeholder="Password"
                  name="password"
                />
              </div>
              {error && (
                <div
                  style={{
                    backgroundColor: "#fee",
                    color: "#c00",
                    padding: "10px",
                    borderRadius: "4px",
                    marginBottom: "15px",
                    border: "1px solid #fcc",
                  }}
                >
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="submit button-primary full-width-on-mobile"
              >
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Login;
