export const StatusSchema={
    include:{
            officier:{
                select:{
                    nom:true,
                    prenom:true,
                    matricule:true,
                    role:true,
                }
            } , 
            declarations:true,
            registre:true,
            acte_deces:{
                include:{
                    acte_naissance:true
                }
            },
            acte_mariage:{
                include:{
                    acte_naissance_mari:{
                        include:{
                            acte:true
                        }
                    }, 
                    acte_naissance_femme:{
                        include:{
                            acte:true
                        }
                    }, 
                    temoignages:true
                }
            },
            acte_naissance:{
                include:{
                    pere:{
                        //! grand pere paternelle
                        include:{
                            pere:true
                        }
                    },
                    pere:{
                        //! grand mère paternelle
                        include:{
                            mere:true
                        }
                    },
                    mere:{
                        //! grand pere maternelle
                        include:{
                            pere:true
                        }
                    },
                    mere:{
                        //! grand mère maternelle
                        include:{
                            mere:true
                        }
                    },
                    
                }
            }
        }
}

export const SingleStatusSchema={
    include:{
        officier:{
            select:{
                nom:true,
                prenom:true,
                matricule:true,
                role:true,
            }
        } , 
        declarations:true,
        registre:true,
        commune:{
            include:{
                ville:true,
                arrondissement:true
            }
        },
        acte_deces:{
            include:{
                acte_naissance:true
            }
        },
        acte_mariage:{
            include:{
                acte_naissance_mari:{
                    include:{
                        acte:true
                    }
                }, 
                acte_naissance_femme:{
                    include:{
                        acte:true
                    }
                }, 
                temoignages:true
            }
        },
        acte_naissance:{
            include:{
                pere:{
                    //! grand pere paternelle
                    include:{
                        pere:true,
                        acte:true
                    }
                },
                pere:{
                    //! grand mère paternelle
                    include:{
                        mere:true,
                        acte:true
                    }
                },
                mere:{
                    //! grand pere maternelle
                    include:{
                        pere:true,
                        acte:true
                    }
                },
                mere:{
                    //! grand mère maternelle
                    include:{
                        mere:true,
                        acte:true
                    }
                },
                
            }
        }
    }
}

export const Transcription=(user)=>[
        {num_commune:user.num_commune},
        {
            OR:[
                {
                    acte_deces:{
                        acte_naissance:{
                            acte:{
                                num_commune:user.num_commune
                            }
                        }
                    },
                },
                {
                    acte_mariage:{
                        OR:[
                            {
                                acte_naissance_mari:{
                                    acte:{
                                        num_commune:user.num_commune
                                    }
                                }    
                            },
                            {
                                acte_naissance_femme:{
                                    acte:{
                                        num_commune:user.num_commune
                                    }
                                }    
                            }
                        ]
                    }
                }
            ]
            
            
        }
    ]
