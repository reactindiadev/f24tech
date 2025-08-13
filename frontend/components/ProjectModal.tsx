import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Project } from '@/types'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className="relative">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  
                  {project.image_url ? (
                    <img src={project.image_url} alt={project.title} className="w-full h-64 object-cover" />
                  ) : (
                    <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                      <svg className="h-24 w-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      {project.client && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                          <p className="text-gray-600">{project.client}</p>
                        </div>
                      )}
                      {project.duration && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                          <p className="text-gray-600">{project.duration}</p>
                        </div>
                      )}
                      {project.team_size && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Team Size</h4>
                          <p className="text-gray-600">{project.team_size}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Project Description</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {project.long_description || project.description}
                      </p>
                    </div>
                    
                    {project.challenge && (
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                      </div>
                    )}
                    
                    {project.solution && (
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                      </div>
                    )}
                    
                    {project.features && project.features.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <svg className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.results && project.results.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Results</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <svg className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.testimonial && (
                      <div className="bg-gray-50 rounded-xl p-6 mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Client Testimonial</h4>
                        <blockquote className="text-gray-600 italic mb-4">
                          "{project.testimonial.testimonial_text}"
                        </blockquote>
                        <div className="flex items-center">
                          <div>
                            <p className="font-semibold text-gray-900">{project.testimonial.author_name}</p>
                            <p className="text-sm text-gray-600">{project.testimonial.author_role}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href={`mailto:sales@f24tech.com?subject=Inquiry about ${project.title}&body=Hi, I'm interested in learning more about the ${project.title} project.`}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                      >
                        Start Similar Project
                      </a>
                      <a 
                        href="/contact" 
                        className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}