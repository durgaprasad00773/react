import React from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <h1 className="text-3xl mb-6">
                    This is Contact Page
                </h1>

                <div className="flex gap-5 mb-6">
                    <Link to="men">Men</Link>
                    <Link to="women">Women</Link>
                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default Contact