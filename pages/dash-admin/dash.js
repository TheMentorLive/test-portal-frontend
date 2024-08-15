// pages/Dash.js

import React, { useState } from 'react';
import Sidebar from './sidebar'; // Import Sidebar component
import { Button } from "@/public/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/public/ui/card";
import { Pagination } from "@/public/ui/pagination";
import { FilePenIcon, TrashIcon } from '@/public/icons/icons';

export default function Dash() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="grid min-h-screen w-full grid-cols-[260px_1fr] bg-gray-500 dark:bg-gray-400">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> {/* Pass state and setter to Sidebar */}
      <main className="flex flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-white px-6 dark:border-gray-800 dark:bg-gray-950">
          <h1 className="text-xl font-semibold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <Button size="sm">Logout</Button>
        </header>
        <div className="flex-1 overflow-auto p-6">
          {activeTab === "Dashboard" && (
            <div className="grid gap-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Post 1</CardTitle>
                    <CardDescription>This is the first blog post.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Published: 2023-04-01</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Post 2</CardTitle>
                    <CardDescription>This is the second blog post.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Published: 2023-04-05</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Post 3</CardTitle>
                    <CardDescription>This is the third blog post.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Published: 2023-04-10</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Post 4</CardTitle>
                    <CardDescription>This is the fourth blog post.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Published: 2023-04-15</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Pagination currentPage={1} totalPages={10} />
              </div>
            </div>
          )}
          {activeTab === "Quiz" && (
            <div className="grid gap-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Quiz 1</CardTitle>
                    <CardDescription>This is the first quiz.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Q : 01</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Quiz 2</CardTitle>
                    <CardDescription>This is the second quiz.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Q : 05</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Quiz 3</CardTitle>
                    <CardDescription>This is the third quiz.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Q : 10</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Quiz 4</CardTitle>
                    <CardDescription>This is the fourth quiz.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Q : 15</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Pagination currentPage={1} totalPages={10} />
              </div>
            </div>
          )}
          {activeTab === "Question Bank" && (
            <div className="grid gap-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Question 1</CardTitle>
                    <CardDescription>This is the first question in the bank.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Difficulty: Easy</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Question 2</CardTitle>
                    <CardDescription>This is the second question in the bank.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Difficulty: Medium</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Question 3</CardTitle>
                    <CardDescription>This is the third question in the bank.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Difficulty: Hard</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Question 4</CardTitle>
                    <CardDescription>This is the fourth question in the bank.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Difficulty: Expert</div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Pagination currentPage={1} totalPages={10} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
