import React from 'react';
import data from '../data/imogen.json'

function RoleWrapper({ role, children }) {
    const character = data.bio[role] || {};
    return (
        <React.Fragment>
            <div class="card mb-2">
                <div class="card-body">
                    <span class="card-title h4 me-4">{ character.title }</span>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Bio
                    </button>
                </div>
            </div>
            {
                children
            }
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{ character.title }</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            { character.bio }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RoleWrapper;