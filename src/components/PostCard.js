import React from "react";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import { Card, Button } from "react-bootstrap";

export default function PostCard({ post }) {
    return (
        <div className="d-flex justify-content-center">
            <Card className="shadow-lg rounded-lg mb-4" style={{ width: "50%" }}>
                <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                        <img
                            src={post.userImage}
                            alt="User"
                            className="rounded-circle border-2 border-gray-400"
                            style={{ width: "40px", height: "40px" }}
                        />
                        <div className="ms-2">
                            <p className="mb-0 font-weight-bold">{post.user}</p>
                            <p className="text-muted mb-0 text-sm">{post.time}</p>
                        </div>
                    </div>
                    <p className="text-muted mb-3">{post.phrase}</p>
                    <img
                        src={post.petImage}
                        alt="Pet"
                        className="w-100 rounded-lg mb-3"
                        style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            <div className="d-flex align-items-center me-4">
                                <Heart size={20} className="text-muted" />
                                <span className="ms-2">{post.likes}</span>
                            </div>
                            <div className="d-flex align-items-center me-4">
                                <MessageSquare size={20} className="text-muted" />
                                <span className="ms-2">{post.comments}</span>
                            </div>
                        </div>
                        <Button variant="link" className="text-muted">
                            <Share2 size={20} />
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}


