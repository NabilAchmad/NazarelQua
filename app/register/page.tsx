import CursorGlow from '../components/CursorGlow';
import Link from 'next/link';

export default function RegisterPage() {
    return (
        <>
            <CursorGlow />
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <div className="card shadow-lg border-0 rounded-4" style={{ width: '25rem' }}>
                    <div className="card-body p-5">
                        <div className="text-center mb-4">
                            <i className="bi bi-person-plus-fill fs-1 text-primary"></i>
                            <h2 className="card-title fw-bold mt-2">Create Account</h2>
                            <p className="text-muted">Sign up to get started</p>
                        </div>

                        <form>
                            <div className="mb-3 input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-person-fill"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameInput"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>

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

                            <div className="mb-3 input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-lock-fill"></i>
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPasswordInput"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mt-3 py-2 fw-semibold btn-animated">
                                Sign Up
                            </button>
                        </form>

                        <div className="text-center mt-4">
                            <p className="text-muted">
                                Already have an account? <Link href="/login" className="text-decoration-none fw-semibold">Sign in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
