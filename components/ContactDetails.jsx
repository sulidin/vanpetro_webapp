"use client";
import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

function ContactDetails() {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 49.15021045591187,
    lng: -122.59363039983106
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return isLoaded ? (
    <div className="contactDetails">
      {/* <!-- Section: Design Block --> */}
      <section className="">
        <div
          className="block dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
      
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                ><Marker position={center}/>
                  <></>
                </GoogleMap>

              
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">

                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">
                        Technical questions
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        vanpetro@vanpetro.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +1 604-888-1323
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">

                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">
                        Invoice questions
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        vanpetro.invoices@gmail.com
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +1 604-888-1323
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">

                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">Address</p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        8080 Glover Road
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        Langley, BC V1M 3S3
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">

                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">Fax</p>

                      <p className="text-neutral-500 dark:text-neutral-200">
                        +1 604-888-1323
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>

  ) : <></>
}

export default ContactDetails