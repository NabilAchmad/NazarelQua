import CursorGlow from '../components/CursorGlow';

export default function LoginPage() {
    return (
        <>
            <CursorGlow />
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <div className="card shadow-lg border-0 rounded-4" style={{ width: '25rem' }}>
                    <div className="card-body p-5">
                        <div className="text-center mb-4">
                            <i className="bi bi-box-arrow-in-right fs-1 text-primary"></i>
                            <h2 className="card-title fw-bold mt-2">Welcome Back!</h2>
                            <p className="text-muted">Sign in to continue</p>
                        </div>

                        <form>
                            <div className="mb-3 input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-envelope-fill"></i>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    placeholder="Email address"
                                    required
                                />
                            </div>

                            <div className="mb-3 input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-lock-fill"></i>
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    placeholder="Password"
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberCheck" />
                                    <label className="form-check-label" htmlFor="rememberCheck">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#" className="form-text text-decoration-none">Forgot password?</a>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mt-3 py-2 fw-semibold btn-animated">
                                Sign In
                            </button>
                        </form>

                        <div className="text-center mt-4">
                            <p className="text-muted">
                                Don't have an account? <a href="/register" className="text-decoration-none fw-semibold">Sign up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
