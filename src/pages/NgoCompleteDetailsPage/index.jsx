import React, { useEffect, useState } from 'react'
import NGOProfile from '../../components/NgoCompleteDetailsPageComponent'
import { useParams } from 'react-router-dom'
import ngoDatabaseServices from '../../databaseService/ngo.database.service';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components';

const NgoCompleteDetailsPage = () => {

    const { ngoid } = useParams();

    if (!ngoid) {
        return <div className="text-center text-red-500">NGO ID is missing in the URL.</div>;
    }
    // Fetch NGO data based on ngoid
    const [ngoProfile, setNgoProfile] = useState(null);


    useEffect(() => {
        let isMounted = true;

        async function fetchNgoDetails() {
            try {
                const response = await ngoDatabaseServices.getNgoProfile(ngoid);
                if (response?.data && isMounted) {
                    setNgoProfile(response.data);
                }
            } catch (error) {
                console.error("Error fetching NGO details:", error);
            }
        }

        fetchNgoDetails();
        return () => {
            isMounted = false;
        };
    }, []);

    // Import useNavigate from react-router-dom
    const navigate = useNavigate();

    return (
        <div className="">
            <header className="bg-white py-3 border-b-[1px] border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <img src="https://res.cloudinary.com/dglwzejwk/image/upload/v1750157677/logoblack_ly0mlm.png" alt="Kindify Logo" className='h-8' />
                            <span className="text-md rounded-lg text-gray-600 px-3 py-1 bg-gray-100"> Ngo details <span className='text-indigo-500 font-semibold capitalize ml-3'>{ngoProfile?.name}</span> </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-gray-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {ngoProfile ? (
                    <NGOProfile ngo={ngoProfile} />
                ) : (
                    <div className="text-center text-gray-500 text-lg">Loading NGO Details...</div>
                )}
            </div>


            <Footer />
        </div>
    )
}

export default NgoCompleteDetailsPage