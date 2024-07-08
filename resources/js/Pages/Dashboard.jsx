import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4 hover:scale-105 duration-300">
                                <h3 className="text-lg font-medium text-gray-900">Total Admin</h3>
                                <p className="text-gray-600">2</p>
                            </div>
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
                                <h3 className="text-lg font-medium text-gray-900">Total siswa</h3>
                                <p className="text-gray-600">154</p>
                            </div>
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
                                <h3 className="text-lg font-medium text-gray-900">Total kursus</h3>
                                <p className="text-gray-600">25</p>
                            </div>
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4">
                                <h3 className="text-lg font-medium text-gray-900">Total petugas</h3>
                                <p className="text-gray-600">10</p>
                            </div>
                        </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
